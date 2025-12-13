import styles from "../styles/CompostTable.module.css"
import CTImage from "./CTImage"

export default function CompostTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.compostTable}>
        <thead>
          <tr>
            <th className={styles.header}>Compostables</th>
            <th className={styles.header}>Not Compostables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.cell}>
                <div className={styles.item}>
                    <CTImage src="/check.png" />
                    Fruit & vegetable scraps
                </div>
                <div className={styles.item}>
                    <CTImage src="/check.png" />
                    Coffee grounds & filters
                </div>
                <div className={styles.item}>
                    <CTImage src="/check.png" />
                    Eggshells
                </div>
                <div className={styles.item}>
                    <CTImage src="/check.png" />
                    Leaves & grass clippings
                </div>
                <div className={styles.item}>
                    <CTImage src="/check.png" />
                    Paper towels & napkins
                </div>
            </td>
            <td className={styles.cell}>
                <div className={styles.item}>
                    <CTImage src="/cross.png" />
                    Meat & fish
                </div>
                <div className={styles.item}>
                    <CTImage src="/cross.png" />
                    Dairy products
                </div>
                <div className={styles.item}>
                    <CTImage src="/cross.png" />
                    Oils & fats
                </div>
                <div className={styles.item}>
                    <CTImage src="/cross.png" />
                    Plastic & metal
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
