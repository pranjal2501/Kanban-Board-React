export default function Box({ ideaArr, stage, updateFunc }) {
  let handleDblClick = (id) => {
    updateFunc(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, stage: stage+1 } : item
      )
    );    
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {ideaArr
          .filter((item) => item.idea && item.idea.trim() !== "") // Filter out empty ideas
          .map((item) => {
            if (item.stage == stage) {

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-md min-h-20 m-3 p-3"
                  onDoubleClick={() => (stage != 4) && handleDblClick(item.id)}
                >
                  {item.idea}
                </div>
              );
            }
          })}
      </div>
    </>
  );
}
