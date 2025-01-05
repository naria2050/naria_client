
const DynamicProductsPage = ({ params,searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h1>Dynamic Products {params.productId} brand {searchParams.category} </h1>
        </div>
    );
};

export default DynamicProductsPage;