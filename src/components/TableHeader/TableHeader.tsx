const TableHeader = () => {
  return (
    <>
      <div className="absolute z-10 mt-4 text-2xl font-semibold">
        <h3>
          Apple Inc. (AAPL){" "}
          <span className="font-mono">
            $214.29{" "}
            <span className="text-red-800 font-mono">($ -2.38) -1.1%</span>
          </span>
        </h3>
      </div>
    </>
  );
};

export default TableHeader;
