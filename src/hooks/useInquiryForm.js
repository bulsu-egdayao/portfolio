import { useMemo, useState } from 'react';
import { sanitizeText, validateInquiry } from '../utils/validation';
import { saveInquiryToFirebase } from '../services/firebase';
import { sendInquiryToLaravel } from '../services/api';

const FIELDS = ['name', 'email', 'subject', 'message'];

const INITIAL_VALUES = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '' // Honeypot field for spam prevention
};

export function useInquiryForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [sentTo, setSentTo] = useState('');

  const errors = useMemo(() => validateInquiry(values), [values]);

  const visibleErrors = useMemo(() => {
    const result = {};
    FIELDS.forEach((field) => {
      if (touched[field] && errors[field]) result[field] = errors[field];
    });
    return result;
  }, [errors, touched]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'submitting') return;

    setTouched({ name: true, email: true, subject: true, message: true });
    const firstInvalid = FIELDS.find((field) => errors[field]);
    if (firstInvalid) {
      document.getElementById(`inquiry-${firstInvalid}`)?.focus();
      return;
    }

    const payload = {
      name: sanitizeText(values.name),
      email: values.email.trim().toLowerCase(),
      subject: values.subject,
      message: sanitizeText(values.message)
    };

    setStatus('submitting');
    try {
      // Honeypot check: If bot filled 'company', trigger fake success without saving
      if (values.company) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSentTo('');
        setStatus('success');
        return;
      }

      // Check configured backend strategy:
      const backendType = import.meta.env.VITE_BACKEND_TYPE || 'firebase'; // 'firebase' | 'laravel' | 'demo'

      if (backendType === 'firebase' && import.meta.env.VITE_FIREBASE_PROJECT_ID) {
        await saveInquiryToFirebase(payload);
      } else if (backendType === 'laravel') {
        await sendInquiryToLaravel(payload);
      } else {
        // Fallback simulation / demo mode
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setSentTo(payload.email);
      setStatus('success');
    } catch (err) {
      console.error('Inquiry submission error:', err);
      // If Firebase or Laravel is not configured yet, still show friendly error or allow retry
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(INITIAL_VALUES);
    setTouched({});
    setStatus('idle');
    setSentTo('');
  };

  return {
    values,
    errors: visibleErrors,
    status,
    sentTo,
    handleChange,
    handleBlur,
    handleSubmit,
    reset
  };
}
