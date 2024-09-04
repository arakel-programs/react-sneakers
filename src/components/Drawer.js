function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Cart
                    <img className="cu-p" src="/img/btn-remove.svg" alt="Close" />  
                </h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>$201.5</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>$201.5</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>$201.5</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                    <li>
                        <span>Total:</span>
                        <div></div>
                        <b>$435.5</b>
                    </li>
                    <li>
                        <span>Tax 5%:</span>
                        <div></div>
                        <b>$15.5</b>
                    </li>
                    </ul>
                    <button className="greenButton">
                    Make an Order 
                    <img src="/img/arrow-right.svg" alt="Arrow Right" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Drawer;