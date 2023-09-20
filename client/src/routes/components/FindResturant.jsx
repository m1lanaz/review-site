const FindResturant = () => {
    return(
        <div className="mb-4 d-flex justify-content-center">
            <form action="">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="location"/>
                    </div>
                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2">
                            <option disabled>Price Range</option>
                            <option value="1">£</option>
                            <option value="2">££</option>
                            <option value="3">£££</option>
                            <option value="4">££££</option>
                        </select>
                        <button className="btn btn-primary ms-4">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FindResturant;