
export default function Profile() {
  const TechStack = [
    { id: 1, name: "Tensorflow" },
     { id: 1, name: "PyTorch" },
      { id: 1, name: "Scikit-Learn" },
     { id: 1, name: "Spark" },
     { id: 5, name: "HuggingFace" },
     { id: 6, name: "MLflow" },
  ]


  return(
  <div className="flex justify-center bg-black w-screen h-screen">
    <div className="items-center mt-20">
      <h1 className="text-xl">
      Hello!, I am Fatih Jawwad
      </h1>
      <h3 className="text-lg text-center mt-12">
        A Machine Learning Enthusiast!
      </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-10">
          {TechStack.map((stack) => (
          <div className="bg-transparent w-30 h-30 border border-white rounded-2xl text-center gap-10">
            <p className="text-sm text-white p-2">
              {stack.name}
            </p>
          </div>  
          ))}
        </div>
    </div>
  </div>
  )
}
