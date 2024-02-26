import { Aside } from "@/components/Aside";
import styles from './styles.module.scss';
import icone from '../../../assets/icone.png'
import Image from "next/image";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function LoginAdimin() {
    return (
        <div className={styles.container}>
            <Aside />

            <main>
                <div>
                    <Image src={icone} alt="icone ifro" />
                    <h1>Instituto federal de rondônia - Admin</h1>
                </div>
                <form>
                    <div>
                        <label>Nome: </label>
                        <Input type="text" />
                    </div>

                    <div>
                        <label>Senha: </label>
                        <Input type="password" />
                    </div>

                    <Button type="submit">Entrar</Button>
                </form>
            </main>
        </div>
    );
}