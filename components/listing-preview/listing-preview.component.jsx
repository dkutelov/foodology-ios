import ListingItem from '../listing-item/listing-item.component';

const ListingPreview = ({ category, professionalsData }) => {
    return (
        <div className='container  mx-auto'>
            <div>
                <h2 className='text-center my-4'>
                    Специалисти по <br />
                    {category.name}
                </h2>
            </div>
            <div>
                {professionalsData.map((professionalData) => (
                    <ListingItem
                        professionalData={professionalData}
                        key={professionalData.id.value}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListingPreview;
