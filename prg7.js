index.html

<!DOCTYPE html>
<html>
<head>
    <title>Welcome to React</title>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</head>

<body>
<!-- Intialize the root tag -->

<div id="root"></div>

<!-- link your index.js here -->

<script src="index.js"></script>

</body>
</html>


index.js

const element = React.createElement("h1",null,"Welcome to React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);