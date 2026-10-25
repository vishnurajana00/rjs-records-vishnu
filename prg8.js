index.html

<!DOCTYPE html>
<html>

<head>
    <title>React Card</title>

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>

<div id="root"></div>

<script type="text/babel" src="index.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>


</body>

</html>





index.js

// TODO 1:
// Create a Recipe component.

function Recipe() {
  return (
    <div className="container">
      <div className="row">

        {/* Card 1 */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="image1.jpg"
              alt="CHICKEN NOODLES SOUP"
            />

            <div className="card-body">
              <h1 className="card-title">Chicken Noodles Soup</h1>

              <ul>
                <li className="list-group-item">
                  2 Tablespoons extra virgin olive oil
                </li>
                <li className="list-group-item">1 yellow onion</li>
                <li className="list-group-item">2 medium carrots</li>
                <li className="list-group-item">2 stalk celery</li>
                <li className="list-group-item">8 cups chicken broth</li>
                <li className="list-group-item">
                  1 (16 oz) package wide egg noodles
                </li>
                <li className="list-group-item">1 cup cooked chicken</li>
              </ul>

              <p className="card-text">
                A delicious and warm chicken noodle soup.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="img2.jpg"
              alt="CURRIED EGG SALAD"
            />

            <div className="card-body">
              <h5 className="card-title">Curried Egg Salad</h5>

              <ul>
                <li className="list-group-item">12 hard boiled eggs</li>
                <li className="list-group-item">1/2 cup mayonnaise</li>
                <li className="list-group-item">2 medium carrots</li>
                <li className="list-group-item">2 stalks celery</li>
                <li className="list-group-item">Salt and pepper to taste</li>
                <li className="list-group-item">1 teaspoon curry powder</li>
                <li className="list-group-item">Fresh coriander leaves</li>
              </ul>

              <p className="card-text">
                A tasty egg salad with a hint of curry.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="image3.jpg"
              alt="OAT CLUSTER"
            />

            <div className="card-body">
              <h5 className="card-title">Oat Cluster</h5>

              <ul>
                <li className="list-group-item">2 cups rolled oats</li>
                <li className="list-group-item">1/2 cup honey</li>
                <li className="list-group-item">1/2 cup almonds</li>
                <li className="list-group-item">1/2 cup raisins</li>
                <li className="list-group-item">1 tablespoon butter</li>
                <li className="list-group-item">1 teaspoon vanilla extract</li>
                <li className="list-group-item">A pinch of salt</li>
              </ul>

              <p className="card-text">
                Crunchy oat clusters for a delicious snack.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// TODO 2:
// Create the React Root.

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// TODO 3:
// Render the Recipe component.

root.render(<Recipe />);