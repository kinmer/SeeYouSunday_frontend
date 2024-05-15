const ClubForm = ({ newClub, handleChange, addClub }) => {
    return (
        <div>
            <h1>Add A Club</h1>
            <form onSubmit={addClub}>
                <input
                    type="text"
                    value={newClub.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="name"
                />
                <input
                    type="text"
                    value={newClub.location}
                    onChange={handleChange}
                    name="location"
                    placeholder="location"
                />
                <input
                    type="text"
                    value={newClub.time}
                    onChange={handleChange}
                    name="time"
                    placeholder="time"
                />
                <input
                    type="text"
                    value={newClub.image}
                    onChange={handleChange}
                    name="image"
                    placeholder="image"
                />
                <textarea
                    value={newClub.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="description"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ClubForm;