import './index.css'
export const Form = ({ setHandleSearch }) => {
    return (
        <div className="input-group mb-3 divHeader">
            <span className="input-group-text"  id="basic-addon1">Nome</span>
            <input type="text" className="form-control" aria-describedby="basic-addon1" onChange={(e) => setHandleSearch(e.target.value)}/>
        </div>
    )
}