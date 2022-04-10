import styles from './LoginForm.module.css';

export interface ILoginForm {}

const LoginForm: React.FC<ILoginForm> = () => {
  return (
      <form action="" method='post' className={styles.form}>
        <h1 className={styles.title}>Faça seu login</h1>
        <div className={styles.formField}>
          <input type="text" className={styles.formInput} placeholder={"E-mail/usuário"}/>
        </div>
        <div className={styles.formField}>
          <input type="password" className={styles.formInput}  placeholder={"Sua senha"} />
        </div>
        <div className={styles.formfield}>
          <button className={styles.formButton} type={"submit"}>Entrar</button>
        </div>
        <div className={styles.formFooter}>
          <a href="">Esqueci a senha</a><br />
          <a href="">Quero me cadastrar</a>
        </div>
      </form>
  );
};

export default LoginForm;
