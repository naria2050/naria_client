
const DynamicProductsPage = ({ params,searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h1>Dynamic Products {params.productId} h1 </h1>
        </div>
    );
};

export default DynamicProductsPage;