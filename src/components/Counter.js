import { useState } from "react";
function Counter() {

    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">{count}</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleClick}>{count}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;