import SearchNumber from "./SearchNumber";

function Search() {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    numPassengers: "",
  });

  // Send search params to API
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    // Construct url string with search params
    const url = [
      `/flights?`,
      `origin=${formData.origin}`,
      `&destination=${formData.destination}`,
      `&departure=${formData.departureDate}`,
      `&return=${formData.returnDate}`,
      `&num_pax=${formData.numPassengers}`,
    ];

    fetch(url.join("")).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((results) => setResults(results));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  // Update form fields from state
  const handleFormFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Display search box and fetch flights from API
  const handleShowSearch = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/origins").then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json()
          .then((data) => setResults(data))
          .then(() => setShowSearchBox(true));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  // Update form data
  const updateFormDataOnClick = (e, id) => {
    e.preventDefault();
    let field;
    if (!formData.numPassengers) {
      field = "numPassengers";
    } else if (formData.destination) {
      field = "departureDate";
    } else if (formData.origin) {
      field = "destination";
    } else {
      field = "origin";
    }

    console.log(field);

    setFormData({ ...formData, [field]: id });

    field === "destination" && fetchFlights(id);
    field === "origin" && fetchDestinations(id);
  };

  // Fetch destinations results from API
  const fetchDestinations = (id) => {
    setErrors([]);
    setIsLoading(true);
    fetch(`/destinations?origin=${id}`).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          setResults(data);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const fetchFlights = (destinationId) => {
    setErrors([]);
    setIsLoading(true);
    fetch(
      `/flights?origin=${formData.origin}&destination=${destinationId}`
    ).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          setResults(data);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  // ! TEST
  useEffect(() => {
    console.log(results);
  }, [results, setResults]);
  // ! TEST

  return (
    <div>
        <SearchNumber min={1} max={6} setter={setNumPassengers} />
      {numPassengers ? <p># of Passengers: {numPassengers}</p> : null}
    </div>
  );
}

export default Search;
