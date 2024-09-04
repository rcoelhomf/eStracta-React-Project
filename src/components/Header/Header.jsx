import './index.css'
import { Form } from '../Form/Form'
export const Header = ({ setHandleSearch }) => {
    return (
        <header className="headerStyle">
            <Form setHandleSearch={ setHandleSearch } />
        </header>
    )
}