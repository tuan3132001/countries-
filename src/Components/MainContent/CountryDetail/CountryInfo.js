import styles from './countryInfoStyles.module.scss';
import clsx from 'clsx';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext/themeContext';


function CountryInfo(props) {
    const themeContext = useContext(ThemeContext);
    return (

        <div className={styles.countryInfo}>
            <h3 className={styles.countryName}> Bhutan</h3>
            <table>
                <tbody>
                    <tr>
                        <td className={styles.countryInfo__title}>Native Name</td>
                        <td>:</td>
                        <td className={styles.CountryInfo__value}>brug-yul</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__title}>Official</td>
                        <td>:</td>
                        <td className={styles.CountryInfo__value}>Kingdom of Bhuatan</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__title}>Population</td>
                        <td>:</td>
                        <td className={styles.CountryInfo__value}>771.612</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__title}>Region</td>
                        <td>:</td>
                        <td className={styles.CountryInfo__value}>Asia</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__title}>Sub Region</td>
                        <td>:</td>
                        <td className={styles.CountryInfo__value}>Southern Asia</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__title}>Capital</td>
                        <td>:</td>
                        <td className={styles.CountryInfo__value}>Thimphu</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__title}>Currencies</td>
                        <td>:</td>
                        <td className={styles.CountryInfo__value}>BTN - Bhutanese ngultrum</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__title}>Languages</td>
                        <td>:</td>
                        <td className={styles.CountryInfo__value}>DzongKha</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__title}>Border Countries</td>
                        <td>:</td>
                        <td className={styles.borderList}>
                            <div className={clsx(styles.borderItem, themeContext.theme)}>China</div>
                            <div className={clsx(styles.borderItem, themeContext.theme)}>India</div>
                            <div className={clsx(styles.borderItem, themeContext.theme)}>Border Countries</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CountryInfo;