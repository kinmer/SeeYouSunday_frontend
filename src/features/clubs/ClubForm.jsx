import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ClubForm = ({ newClub, handleChange, addClub }) => {
    return (
        <div>
            <h1>Add A Club</h1>
            <Form onSubmit={addClub}>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input
                        type="text"
                        value={newClub.name}
                        onChange={handleChange}
                        name="name"
                        placeholder="name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Location</Label>
                    <Input
                        type="text"
                        value={newClub.location}
                        onChange={handleChange}
                        name="location"
                        placeholder="location"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Time</Label>
                    <Input
                        type="text"
                        value={newClub.time}
                        onChange={handleChange}
                        name="time"
                        placeholder="time"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Image</Label>
                    <Input
                        type="text"
                        value={newClub.image}
                        onChange={handleChange}
                        name="image"
                        placeholder="image"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Description</Label>
                    <Input
                        type="textarea"
                        value={newClub.description}
                        onChange={handleChange}
                        name="description"
                        placeholder="description"
                    />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default ClubForm;
