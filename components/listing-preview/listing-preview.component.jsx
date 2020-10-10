import ListingItem from '../listing-item/listing-item.component';

const ListingPreview = ({ category, professionalsData }) => {
    return (
        <div>
            {professionalsData.map((professionalData) => (
                <ListingItem
                    professionalData={professionalData}
                    key={professionalData.id.value}
                />
            ))}
        </div>
    );
};

export default ListingPreview;
