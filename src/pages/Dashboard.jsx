import { useState } from "react";
// import Product from "../components/Product";
import Button from "../components/Button";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { MdClose, MdCancelPresentation } from "react-icons/md"
import { AiOutlineMinusCircle, AiTwotoneDelete, AiFillSave } from "react-icons/ai"
import { BsCartPlusFill } from "react-icons/bs"
import { FaCartArrowDown } from "react-icons/fa"
import { BiMessageSquareAdd, BiSolidEditAlt } from "react-icons/bi"


const Dashboard = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Jersey Adidas KF0257K",
            image: "/jersey_futsal_kf0257k.jpeg",
            price: 353997,
            categori: "Jersey"
        },
        {
            id: 2,
            name: "Bola Futsal Adidas",
            image: "/bola_futsal_mitre.jpeg",
            price: 657000,
            categori: "Bola"
        },
        {
            id: 3,
            name: "Pelindung Lutut Merk Nike",
            image: "/pelindung_lutut_futsal.jpeg",
            price: 236000,
            categori: "Pelindung lutut"
        },
        {
            id: 4,
            name: "Sepatu Futsal Lightspeed",
            image: "/sepatu_futsal_lightspeed.jpeg",
            price: 1340000,
            categori: "Sepatu"
        },
        {
            id: 5,
            name: "Sepatu Futsal Specs",
            image: "sepatu_futsal_specs.jpeg",
            price: 800000,
            categori: "Sepatu"
        },
        {
            id: 6,
            name: "Jersey Timnas Nike",
            image: "/jersey_timnas.jpeg",
            price: 570000,
            categori: "Jersey"
        },
        {
            id: 7,
            name: "Daker Adidas",
            image: "/daker_adidas.jpeg",
            price: 210000,
            categori: "Daker"
        },
        {
            id: 8,
            name: "Jersey Futsal KF0257K",
            image: "/jersey_futsal_kf0257k.jpeg",
            price: 999000,
            categori: "Jersey"
        },
        {
            id: 9,
            name: "Jersey Futsal Puma KF0137",
            image: "/jersey_kf0137.jpeg",
            price: 850000,
            categori: "Jersey"
        },
        {
            id: 10,
            name: "Sepatu Futsal Specs",
            image: "/sepatu_futsal_specs.jpeg",
            price: 634000,
            categori: "Sepatu"
        },
        {
            id: 11,
            name: "Daker Specs",
            image: "daker_specs.jpeg",
            price: 56000,
            categori: "Daker"
        },
        {
            id: 12,
            name: "Bola Futsal Mitre",
            image: "/bola_futsal_mitre.jpeg",
            price: 4200000,
            categori: "Bola"
        },
        {
            id: 13,
            name: "Sepatu Futsal Puma",
            image: "sepatu_futsal_specs.jpeg",
            price: 780000,
            categori: "Sepatu"
        },
        {
            id: 14,
            name: "Jersey Timnas Jordan",
            image: "/jersey_timnas.jpeg",
            price: 1790000,
            categori: "Jersey"
        },
        {
            id: 15,
            name: "Daker Adidas Keren",
            image: "/daker_adidas.jpeg",
            price: 210000,
            categori: "Daker"
        },
        {
            id: 16,
            name: "Futsal KF0257K",
            image: "/jersey_futsal_kf0257k.jpeg",
            price: 1099000,
            categori: "Jersey"
        },
    ]);
    const [idSquence, setIdSequence] = useState(products.length);
    const [newProduct, setNewProduct] = useState();
    const [editedProduct, setEditedProduct] = useState();
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [sortBy, setSortBy] = useState("id");
    const [sortOrder, setSortOrder] = useState("ascending");
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(...selectedImage,file.image);
        setNewProduct({...newProduct,image:file})
    };

    const filteredSortedProducts = products
        .toSorted((a, b) => {
            if (sortOrder === "ascending") {
                return a[sortBy] < b[sortBy] ? -1 : 1;
            } else {
                return a[sortBy] > b[sortBy] ? -1 : 1;
            }
        })
        .filter(
            (product) =>
                product.name.toLowerCase().includes(keyword) &&
                product.price >= minPrice &&
                product.price <= maxPrice
        );

    return (
        <div className="products">
            <button onClick={() => setIsCartOpen(true)} className="cart-open">
                <FaCartArrowDown size={24} /> : {cart.reduce((a, p) => a + p.count, 0)}
            </button>
            <button onClick={() => setNewProduct({ id: idSquence })} className="cart-open"><BiMessageSquareAdd size={24} /><span>Add </span></button>
            <header>
                <label>
                    Search:
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </label>
                <section>
                    Price:
                    <label>
                        Minimal:
                        <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                    </label>
                    <label>
                        Maximal:
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value || Infinity)}
                        />
                    </label>
                </section>
                <section>
                    Sort:
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="id">ID</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </section>
            </header>
            <main>
                {filteredSortedProducts.length > 0
                    ? filteredSortedProducts
                        .filter((_product, i) => i >= page * 8 - 8 && i < page * 8)
                        .map((product) => (
                            <div className="product" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <section>
                                    <h4>({product.id})</h4>
                                    <h2>{product.name}</h2>
                                    <p>
                                        {product.price.toLocaleString("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            maximumFractionDigits: 0,
                                        })}
                                        ({product.categori})
                                    </p>
                                    <div>
                                        <Button variant="tonal"
                                            onClick={() => setEditedProduct((product))}>
                                            <BiSolidEditAlt size={24} />
                                        </Button>
                                        <Button variant="tonal" onClick={() =>
                                            confirm(`Apakah Anda yakin ingin menghapus product ${product.name} ? `) &&
                                            setProducts(products.filter((p) => p.id !== product.id))
                                        }
                                            title="Hapus">
                                            <AiTwotoneDelete size={24} />
                                        </Button>
                                    </div>
                                    <div>
                                        <Button onClick={() => {
                                            if (cart.find((p) => p.id === product.id)) {
                                                setCart(
                                                    cart.map((p) =>
                                                        p.id === product.id
                                                            ? {
                                                                ...p,
                                                                count: p.count + 1,
                                                            }
                                                            : p
                                                    )
                                                );
                                            } else {
                                                setCart([...cart, { ...product, count: 1 }]);
                                            }
                                        }}>
                                            <BsCartPlusFill size={24} />
                                        </Button>
                                    </div>
                                </section>
                            </div>
                        ))
                    : "Tidak ada produk ditemukan."}
            </main>
            <footer>
                <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Previously
                </Button>
                {filteredSortedProducts
                    .filter((_product, i) => i % 8 === 0)
                    .map((_product, i) => (
                        <button
                            key={i}
                            className="page-number"
                            onClick={() => setPage(i + 1)}
                            disabled={i + 1 === page}
                        >
                            {i + 1}
                        </button>
                    ))}
                <Button
                    onClick={() => setPage(page + 1)}
                    disabled={page === Math.ceil(filteredSortedProducts.length / 8)}
                >
                    Furthermore
                </Button>
            </footer>
            {newProduct && (
                <form
                    className="card dialog"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setProducts([...products, newProduct]);
                        setNewProduct();
                        setIdSequence(idSquence + 1);
                    }}
                >
                    <h1>Tambah Product</h1>
                    <label>
                        ID
                        <input type="text" value={newProduct.id} readOnly />
                    </label>
                    <label>
                        Nama
                        <input
                            type="text"
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, name: e.target.value })
                            }
                            required
                            autoFocus
                        />
                    </label>
                    <label>
                        Price
                        <input
                            type="number"
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, price: e.target.value })
                            }
                            required
                        />
                    </label>
                    <div>
                        <label>
                            Image:
                            <input
                                type="file"
                                onChange={ handleImageChange
                                }
                                required
                            />{selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" />}
                        </label>
                    </div>
                    <label>
                        Categori:
                        <select value={newProduct.categori} onChange={(e) =>
                            setNewProduct({ ...newProduct, categori: e.target.value })
                        }>
                            <option value="Jersey">Jersey</option>
                            <option value="Bola">Bola</option>
                            <option value="Sepatu">Sepatu</option>
                            <option value="Daker">Daker</option>
                            <option value="Pelindung Lutut">Pelindung Lutut</option>
                        </select>
                    </label>
                    <div>
                        <button onClick={() => setNewProduct()}><MdCancelPresentation size={24} /></button>
                        <button><AiFillSave size={24} /></button>
                    </div>
                </form>
            )
            }
            {
                editedProduct && (
                    <form
                        className="dialog"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setProducts(
                                products.map((product) =>
                                    product.id === editedProduct.id ? editedProduct : product
                                )
                            );
                            setEditedProduct(undefined);
                        }}
                    >
                        <h1>Edit Product</h1>
                        <label>
                            Name
                            <input
                                type="text"
                                value={editedProduct.name}
                                onChange={(e) =>
                                    setEditedProduct({ ...editedProduct, name: e.target.value })
                                }
                                autoFocus
                            />
                        </label>
                        <label>
                            Price
                            <input
                                type="number"
                                value={editedProduct.price}
                                onChange={(e) =>
                                    setEditedProduct({
                                        ...editedProduct,
                                        price: parseInt(e.target.value),
                                    })
                                }
                            />
                        </label>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button
                                type="reset"
                                variant="tonal"
                                onClick={() => setEditedProduct(undefined)}
                            >
                                <MdCancelPresentation size={24} />
                            </Button>
                            <Button><AiFillSave size={24} /></Button>
                        </div>
                    </form>
                )
            }
            {
                isCartOpen && (
                    <div className="card dialog">
                        <button onClick={() => setIsCartOpen(false)}>
                            <MdClose />
                        </button>
                        <h1>Keranjang</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nama</th>
                                    <th>Jumlah</th>
                                    <th>Tindakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((planet) => (
                                    <tr key={planet.id}>
                                        <td>{planet.id}</td>
                                        <td>{planet.name}</td>
                                        <td>{planet.count.toLocaleString()}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    if (planet.count > 1) {
                                                        // menggunakan indeks:
                                                        // setCart(
                                                        //   cart.with(i, { ...planet, count: planet.count - 1 })
                                                        // );
                                                        // menggunakan ID planet:
                                                        setCart(
                                                            cart.map((p) =>
                                                                p.id === planet.id
                                                                    ? { ...p, count: p.count - 1 }
                                                                    : p
                                                            )
                                                        );
                                                    } else {
                                                        setCart(cart.filter((p) => p.id !== planet.id));
                                                    }
                                                }}
                                                title="Kurangi"
                                            >
                                                <AiOutlineMinusCircle />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setCart(
                                                        cart.map((p) =>
                                                            p.id === planet.id
                                                                ? { ...p, count: p.count + 1 }
                                                                : p
                                                        )
                                                    );
                                                }}
                                                title="Tambah"
                                            >
                                                <AiOutlinePlusCircle />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div >
    );
}

export default Dashboard
