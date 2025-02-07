useEffect(() => {
    fetch("http://localhost:5000/api/receive")
      .then((res) => res.json())
      .then(setFoodItems);
  }, []);
  