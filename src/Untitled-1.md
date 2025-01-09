<!-- 2 types of component -->
<!-- Class Component -->
<!--
 we want to access properties and methods of react component

Class Component =># render method is mandatory
                  # Constructor => super method needs to be called when we talk about class component



State(data)
-plain js object -(REact component)
-info about component,handles render of elements in component

- can be changed (through life cycle of component)
- Event handlers
this.setState({}) => to change the state of the component
 -Asynchronous method
 -Process at the background and cursor moves to next line


Props(properties)
-they can not be changed (immutable in nature)
-parent to child transfer
function add(a,b){
}
add(kapil,vishwadip)
<!-- Function Component -->

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      heading: "Hello",
      para: "para",
      fullname: props.name + " " + "Choudhari",
      age: props.age - 2,
      arr: [
        { id: 10, name: "Pratik" },
        { id: 20, name: "Prajwal" },
      ],
    };
  }

  getData() {
    console.log("button clicked");
    console.log(this);
    console.log(this.state.firstname);
    console.log(this.state.age);
    console.log("Before changed", this.state.heading);
    const oldArr = this.state.arr;
    oldArr.push({ id: 30, name: "Prathm" });

    this.setState({
      heading: "How are you",
      arr: oldArr,
    });

    console.log("After changed", this.state.heading);
  }
 <h1>{this.state.heading}</h1>
        <h3>{this.state.para}</h3>
        <p>{this.state.fullname} </p>
        <p>{this.state.age} </p>
        <p>{this.props.name} </p>
        <p>{this.props.age} </p>
        <button onClick={this.getData}>Change</button>
        {this.state.arr.map((ele) => {
          return <p key={ele.id}>{ele.name}</p>;
        })}
        <Data1 fullname={this.state.fullname} updateage={this.state.age} />
        <Data2 name={this.props.name} age={this.props.age} />