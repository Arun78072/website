import { Link } from 'react-router-dom';

const Storeitem = ({ title, price, image, id }) => {
    return (
        <>
            <a href={id}>
                <div className="pro__content">
                    <div className="img__sec"><img src={image} alt={title} /></div>
                    <h5>{title}</h5>
                    <p>Price = $<span>{price}</span></p>

                </div>
            </a>
        </>
    )
}

function Store({ items }) {
    // const [filterdItems, setfilterdItems] = useState(items);
    return (
        <>
            {/* <input onChange={e=>{
            let f = items.filter(item => item.title.toLowerCase().include(e.target.value));
            setfilterdItems(f);
        }} placeholder="Search...." /> */}
            <div className="pro__container">
                {items.map((item) => {
                    return (
                        <>
                            <Storeitem {...item} />
                        </>
                    );
                })}
            </div>
            
        </>
    )
};
export default Store;