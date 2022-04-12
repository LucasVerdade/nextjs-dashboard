import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";

export interface ILoginForm {}

const LoginForm: React.FC<ILoginForm> = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const { signInContext } = useContext(AuthContext);

  const handleSignIn = async (data) => {
    const result = await signInContext(data);
    if (typeof result === "boolean" && result) {
      router.push("/");
    }
    if ((result as any)?.error && (result as any).status === 401) {
      setError("email", {
        type: "custom",
        message: "Email e/ou senha inválidos",
      });
      setError("password", {
        type: "custom",
        message: "Email e/ou senha inválidos",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      method="post"
      className={styles.form}
    >
      <h1 className={styles.title}>Faça seu login</h1>
      <div className={styles.formField}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Este email não é válido",
            },
          })}
          id="email-address"
          autoComplete="email"
          type="text"
          className={`${styles.formInput} ${errors.email && styles.errorInput}`}
          placeholder={"E-mail/usuário"}
        />
      </div>
      <div className={styles.formField}>
        <input
          {...register("password")}
          id="password"
          autoComplete="current-password"
          type="password"
          className={`${styles.formInput} ${
            errors.password && styles.errorInput
          }`}
          placeholder={"Sua senha"}
        />
      </div>
      {errors.email && (
        <div className={styles.errorMessage}>
          <span>{errors.email.message}</span>
        </div>
      )}
      <div className={styles.formfield}>
        <button className={styles.formButton} type={"submit"}>
          Entrar
        </button>
      </div>
      <div className={styles.formFooter}>
        <a href="">Esqueci a senha</a>
        <br />
        <a href="">Quero me cadastrar</a>
      </div>
    </form>
  );
};

export default LoginForm;
