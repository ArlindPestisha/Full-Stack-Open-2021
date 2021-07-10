import Course from "./components/Course";

// const Course = ({ course }) => {
//   return (
//     <>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </>
//   );
// };

// const Header = (props) => {
//   console.log(props);
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   );
// };

// const Part = (props) => {
//   console.log(props);
//   return (
//     <>
//       <p>
//         {props.parts[0].name} {props.parts[0].exercises}
//       </p>
//       <p>
//         {props.parts[1].name} {props.parts[1].exercises}
//       </p>
//       <p>
//         {props.parts[2].name} {props.parts[2].exercises}
//       </p>
//     </>
//   );
// };

// const Content = (props) => {
//   console.log(props);
//   return (
//     <>
//       <Part parts={props.parts} />
//     </>
//   );
// };

// const Total = (props) => {
//   return (
//     <>
//       <p>
//         Number of exercises{" "}
//         {props.parts[0].exercises +
//           props.parts[1].exercises +
//           props.parts[2].exercises}
//       </p>
//     </>
//   );
// };

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  // return (
  //   <div>
  //     <Header course={course.name} />
  //     <Content
  //       parts={course.parts}
  //       // part1={part1.name}
  //       // exercises1={part1.exercises}
  //       // part2={part2.name}
  //       // exercises2={part2.exercises}
  //       // part3={part3.name}
  //       // exercises3={part3.exercises}
  //     />
  //     <Total parts={course.parts} />
  //   </div>
  // );

  return <Course courses={courses} />;
};

export default App;
