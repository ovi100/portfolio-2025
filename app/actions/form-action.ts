'use server'

export type FormState = {
  errors?: {
    name?: string
    email?: string
    subject?: string
    message?: string
  }
  success?: boolean
  message?: string
}

// Simple email validation function
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
};

// interface ExtractedFormData {
//   [key: string]: FormDataEntryValue;
// }

// const extractFormData = (formData: FormData): ExtractedFormData => {
//   const result: ExtractedFormData = {};

//   for (const [key, value] of formData.entries()) {
//     if (!key.startsWith('$')) {
//       result[key] = value;
//     }
//   }

//   return result;
// };

export async function submitForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Get form data
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Validate form data manually
  const errors: {
    name?: string
    email?: string
    subject?: string
    message?: string
  } = {}

  // Name validation
  if (!name.trim()) {
    errors.name = 'Name is required'
  }
  if (name && name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters long'
  }

  // Email validation
  if (!email.trim()) {
    errors.name = 'Email is required'
  }
  if (email && !isValidEmail(email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Subject validation
  if (!subject.trim()) {
    errors.name = 'Subject is required'
  }

  // Message validation
  if (!message.trim()) {
    errors.name = 'Message is required'
  }

  // If there are errors, return them
  if (Object.keys(errors).length > 0) {
    return {
      errors,
      success: false,
      message: 'Please fix the errors in the form',
    }
  }

  // In a real application, you would process the form data here
  console.log('Form data:', { name, email, subject, message });

  // Return success state
  return {
    success: true,
    message: 'Your message has been sent successfully!',
  }
}