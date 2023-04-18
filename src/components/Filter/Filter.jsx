export const Filter = ({ onChange, value }) => {
  return (
    <>
      <label htmlFor="find">Find contacts by name</label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        id="find"
        name="find"
      />
    </>
  );
};
