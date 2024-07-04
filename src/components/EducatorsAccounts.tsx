

const user= [
	{
		id: 1,
		imageUrl:
			"https://cdni.iconscout.com/illustration/premium/thumb/online-testing-scene-4315045-3610779.png",
		account_type: "Educator",
		description:
			"Assess and review all students in your class/classes",
		// border: "border-red-500",
		
	},
	{
		id: 2,
		imageUrl:
			"https://cdni.iconscout.com/illustration/premium/thumb/online-testing-scene-4315045-3610779.png",
		account_type: "Principal",
		description:
			"Review results of all students within your school (cannot take assessment on students)",
		border: "border-green-500",
		
	},

	{
		id: 3,
		imageUrl:
			"https://cdni.iconscout.com/illustration/premium/thumb/testing-team-doing-usability-testing-6823605-5625475.png?f=webp",
		account_type: "District Staff",
		description:
			"Review results and assess students or classes created by educator in multiple schools (cannot create classes)",
		border: "border-blue-500",
		
	},

	{
		id: 4,
		imageUrl:
			"https://cdni.iconscout.com/illustration/premium/thumb/testing-services-4500531-3804442.png?f=webp",
		account_type: "School Package",
		description: "Create in bulk Principal, District Staff, Educator and Student",
		border: "border-yellow-500",
		
		
	},
];


const EducatorsAccounts: React.FC = () => {
	return (
	<>
     <h1 className="text-center font-bold text-xl">Create Educational Institutions and Educators Account</h1>
     
            <div style={{width:"80%" , height:450, margin:'auto',marginTop:'50px'}} className=" p-4 flex flex-row justify-center items-center">
            {user.map((data)=>{
        return (
        <div style={{textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center', gap:20}} key={data.id} >
            <div> <h1 className=" text-lg">{data.account_type}</h1></div>
            <div><img
						alt="example"
						src={data.imageUrl}
						className="w-40 h-auto mx-auto"
					/></div>
           
           <div> <p>{data.description}</p></div>
           <div className="mt-10 align"> <input type="radio" /></div>
        </div>
          )
        })}
     </div>
      
     </>	
    )
};

export default EducatorsAccounts;