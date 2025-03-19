// Types for contact form

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string | null;
}
