import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import styles from './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<h1>Hello world...</h1>, document.getElementById('app'));

/********JSX Example start********/

/*var textdata = 'Today is a beautiful day...';
const element = (
  <div>
    <a href="#" target="_blank" className="btn-small">
      Button
    </a>
    <div>{textdata}</div>
  </div>
);
ReactDOM.render(element, document.getElementById('root'));
*/
/*********JSX Example Closed********/

/*********Rendering Elements start********/

// traditional function

/*function formateName(user) {
  
  return user.firstName + ' ' + user.lastName;
}*/

// Arrow function
/*const formateName = (user) => {
  return user.firstName + ' ' + user.lastName;
};

const user = {
  firstName: 'Swati',
  lastName: 'Raturi',
};

const element = <h1>hello, {formateName(user)}</h1>;

ReactDOM.render(element, document.getElementById('root'));
*/
/*********Rendering Elements Closed********/

/*********Rendering Elements II start********/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello Swati</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));

function tick() {
  ReactDOM.render(<Clock />, document.getElementById('root'));
}

/********* Rendering Elements II Closed********/

/********** Components & Props start ***************/

/*
function Welcome(props) {
  return <h1>Hello, {props.lastname}</h1>;
}

const element = <Welcome lastname="Raturi" />;

ReactDOM.render(element, document.getElementById('root'));

*/
/********** Components & Props closed ***************/

/********** Multiple Choice Ques & Ans Start ***************/
/*
class Quiz extends React.Component {
  constructor(props) {
    super(props);

    var dataSet = [
      {
        question: 'What is 8x1 ?',
        answer: ['1', '8', '16', '9'],
        correct: 1,
      },
      {
        question: 'Who is Steve Jobs ?',
        answer: [
          'CEO of MicorSoft',
          'Barber in NY',
          'Star in Movie',
          'CEO Of Apple',
        ],
        correct: 3,
      },
      {
        question: 'Mettalic is a ______ band',
        answer: ['Blues', 'Hard rock', 'Jazz', 'Metal'],
        correct: 3,
      },
      {
        question: 'IS is a _____',
        answer: ['Word', 'Brand', 'Terror Group', 'None of the above'],
        correct: 2,
      },
      {
        question: 'Who is Einstein?',
        answer: [
          'A Scientist',
          'A dentist',
          'A Serial Killer',
          'None of the above',
        ],
        correct: 0,
      },
      {
        question: 'Javascript can be used in _____ development',
        answer: ['Back-end', 'Front-end', 'ReactJS', 'All the Above'],
        correct: 3,
      },
      {
        question: 'Hitler was a _____',
        answer: [
          'Mass Muderer',
          'Dictator',
          'Jew',
          'None of the above',
          'All the Above',
        ],
        correct: 4,
      },
      {
        question: 'Korn is a',
        answer: ['Nu-Metal band', 'Religion', 'Singer'],
        correct: 0,
      },
      {
        question: 'Windows Computer are',
        answer: ['Horrible', 'Great', 'Cheap', 'Invented By Bill Gates'],
        correct: 3,
      },
      {
        question: 'The BigBan stands in ',
        answer: ['Egypt', 'London', 'Amsterdam', 'New York'],
        correct: 1,
      },
    ];

    this.state = { current: 0, dataSet: dataSet, correct: 0, incorrect: 0 };
    //console.log(this.state.dataSet);
    this.handClick = this.handClick.bind(this);
  } // end of constructor

  handClick(choice) {
    //console.log(choice);
    //console.log(this.state.dataSet[this.state.current].correct);
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }
    //sssconsole.log(this.state.current);
    if (this.state.current == 9) {
      this.setState({ current: 0 });
      this.setState({ incorrect: 0 });
      this.setState({ correct: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  }

  render() {
    return (
      <div>
        <ScoreArea
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        />
        <QuizArea
          handClick={this.handClick}
          dataSet={this.state.dataSet[this.state.current]}
        />
      </div>
    );
  }
}

function ScoreArea(props) {
  return (
    <div className="scorearea-class">
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </div>
  );
}

function TotalCorrect(props) {
  return <h2 className="totalcorrect_class">Correct: {props.correct}</h2>;
}

function TotalIncorrect(props) {
  return <h2 className="totalincorrect_class">Incorrect: {props.incorrect}</h2>;
}

function QuizArea(props) {
  return (
    <div className="quizarea-class">
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handClick={props.handClick} />
    </div>
  );
}

function Question(props) {
  return <h1 className="question-class ">{props.dataSet.question}</h1>;
}

function Answer(props) {
  return (
    <div>
      <button
        className="answer-class"
        onClick={() => props.handClick(props.choice)}
      >
        {props.answer}
      </button>
    </div>
  );
}

function AnswerList(props) {
  var answers = [];

  for (let i = 0; i < props.dataSet.answer.length; i++) {
    //console.log(props.dataSet.answer.length);
    answers.push(
      <Answer
        choice={i}
        handClick={props.handClick}
        answer={props.dataSet.answer[i]}
      />
    );
  }
  return <div>{answers}</div>;
}

ReactDOM.render(<Quiz />, document.getElementById('root'));
*/
/********** Multiple Choice Ques & Ans closed ***************/

/******Project Start For Seacrh Product ******/
/*
const PRODUCTS = [
  {
    category: 'Sporting Good',
    price: '$49.9',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Good',
    price: '$9.99',
    stocked: true,
    name: 'Basetball',
  },
  {
    category: 'Sporting Good',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Nexus 7',
  },
];

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly,
    });
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <SearchBar
                  filterText={this.state.filterText}
                  inStockOnly={this.state.inStockOnly}
                  onFilterTextChange={this.handleFilterTextChange}
                  onInStockChange={this.handleInStockChange}
                ></SearchBar>
              </td>
            </tr>
            <tr>
              <td>
                <ProductTable
                  products={this.props.products}
                  filterText={this.state.filterText}
                  inStockOnly={this.state.inStockOnly}
                ></ProductTable>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          id="searchbox"
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        ></input>
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          ></input>{' '}
          Only Show products in stock
        </p>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
      console.log(lastCategory);
    });

    return (
      <table id="comp">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
*/
/******Project End for Seacrh Product******/

/*********Concept Of Key start*******/

/*
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem kye={number.toString()} value={number} />
  ));

  return <ul>{listItems}</ul>;
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/
/*********Concept Of Key end*******/
