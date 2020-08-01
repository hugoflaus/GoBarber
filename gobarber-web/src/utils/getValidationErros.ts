import { ValidationError } from 'yup';

interface Erros {
  [key: string]: string;
}

export default function getValidateErros(err: ValidationError): Erros {
  const validationErros: Erros = {};

  err.inner.forEach(error => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
