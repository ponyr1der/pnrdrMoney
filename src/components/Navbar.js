import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>pnrdrMoney</li>

            {!user && (
              <>
                <li><Link className={styles.link} to='/login'>Войти</Link></li>
                <li><Link className={styles.link} to='/signup'>Регистрация</Link></li>
              </>
            )}
            
            {user && (
              <>
                <li>привет, {user.displayName}</li>
                <li>
                  <button className='btn' onClick={logout}>Выйти</button>
                </li>
              </>
            )}
        </ul>
    </nav>
  )
}
