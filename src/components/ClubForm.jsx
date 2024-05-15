import { useNavigate } from 'react-router-dom';

const ClubForm = (props) => {
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        props.addClub(e);
        navigate('/clubs');
    };

    const newClub = props.newClub;

    return (
        <div>
            <h1>Add A Club</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newClub.name}
                    onChange={props.handleChange}
                    name={'name'}
                    placeholder={'name'}
                />
                <input
                    type="text"
                    value={newClub.location}
                    onChange={props.handleChange}
                    name={'location'}
                    placeholder={'location'}
                />
                <input
                    type="text"
                    value={newClub.time}
                    onChange={props.handleChange}
                    name={'time'}
                    placeholder={'time'}
                />
                <input
                    type="text"
                    value={newClub.image}
                    onChange={props.handleChange}
                    name={'image'}
                    placeholder={'image'}
                />
                <input
                    type="text-area"
                    value={newClub.description}
                    onChange={props.handleChange}
                    name={'description'}
                    placeholder={'description'}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ClubForm;
