const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <>
      <p>Number of exercises {total}</p>

      {/* <p>
        Number of exercises{" "}
        {parts[0].exercises +
          parts[1].exercises +
          parts[2].exercises}
      </p> */}
    </>
  );
};

export default Total;
