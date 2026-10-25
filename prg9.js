index.html

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Student Report Card</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- React CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <!-- React DOM CDN -->
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Babel CDN -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>

    <div class="container mt-5">

        <h2 class="text-center mb-4">Student Marks Card</h2>

        <!-- React Root -->
        <div id="root"></div>

    </div>

    <!-- Student React Code -->
    <script type="text/babel" src="index.js"></script>

    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>



index.js


function StudentCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={props.image}
          className="card-img-top"
          alt={props.name}
        />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p><b>Name:</b> {props.name}</p>
          <p><b>Reg No:</b> {props.regno}</p>
          <p><b>Department:</b> {props.department}</p>
          <p><b>Marks:</b> {props.marks}</p>
        </div>
      </div>
    </div>
  );
}

// Create the React Root.
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Render three StudentCard components.
root.render(
  <div className="container mt-4">
    <div className="row">

      <StudentCard
        image="image1.jpg"
        name="Rahul"
        regno="101"
        department="BCA"
        marks="92"
      />

      <StudentCard
        image="image2.jpg"
        name="Harish"
        regno="102"
        department="B.Sc CS"
        marks="88"
      />

      <StudentCard
        image="image3.jpg"
        name="Arun"
        regno="103"
        department="B.Com"
        marks="95"
      />

    </div>
  </div>
);