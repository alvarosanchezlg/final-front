import "./styles.css";

const Paginador = ({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}) => {
  const pages = Array.from(
    new Set([1, 2, 3, page, totalPages - 2, totalPages - 1, totalPages])
  )
    .filter((e) => e >= 1 && e <= totalPages)
    .sort((a, b) => a - b);

  return (
    <div className="paginador">
      {page > 1 && (
        <button onClick={() => setPage(page - 1)}>
          {"<"}
        </button>
      )}

      {pages.map((e) => (
        <button
          key={e}
          className={e === page ? "active" : ""}
          onClick={() => setPage(e)}
        >
          {e}
        </button>
      ))}

      {page < totalPages && (
        <button onClick={() => setPage(page + 1)}>
          {">"}
        </button>
      )}
    </div>
  );
};

export default Paginador;
