import { Card} from "antd";

// Destructure Card and Avatar components from Antd
// const { Meta } = Card;

// Sample user data
interface UserData {
    id: number;
    imageUrl: string;
    account_type: string;
    description: string;
    border:string;
    btn1:string;
    btn2:string;
  }
const user: UserData[]=[
    {
        id:1,
        imageUrl:
            "https://img.freepik.com/premium-vector/learn-invest-isolated-cartoon-vector-illustrations_107173-22008.jpg", 
            account_type:'Educational Institutions and Educators',
            description:'Principals, district staff, and educators can form classes/groups and assess students (adult or children), while students can self-assess and receive reviews from parents',
            border:'border-red-500',
            btn1:'Business Packages',
            btn2:'Business Professionals & Team',
    },
    {
        id:2,
        imageUrl:
            "https://img.freepik.com/premium-vector/vector-drawn-illustration-security-system-computer-monitor-lock-man-with-shield-defender-personal-data-protection-antivirus-hacking-bug-privacy-concept-flat-drawing-style-eps10_399089-5710.jpg", 
            account_type:"Business and Business Professionals",
            description:"Leaders can create and assess teams, including their own evaluation,while team members can self-assess or assess their colleagues.",
            border:'border-green-500',
            btn1:'Business Packages',
            btn2:'Business Professionals & Team',
    },
    
    {
        id:3,
        imageUrl:
        "https://img.freepik.com/premium-vector/illustration-design-thinking-concept_207579-25.jpg",
        account_type:"Coach and Clients",
        description:'Coaches can create and assess groups or individuals, while clients can self-assess and can also receive reviews from a third party.',
        border:'border-blue-500',
        btn1:'Business Packages',
        btn2:'Business Professionals & Team',
    },
    
 
    {
        id:4,
        imageUrl:
            "https://img.freepik.com/premium-vector/entrepreneurship-flat-character-vector-illustration_9206-2941.jpg",
            account_type:"Community: Individual Adult or Parents/ Child",
            description:"Assess yourself and or your children (Entirely FREE)",
            border:'border-yellow-500',
            btn1:'Business Packages',
            btn2:'Business Professionals & Team',
    },

]

// UserCard component
const SelectAccount: React.FC = () => {
    return (
      <div className="flex flex-wrap justify-center">
        {user.map((data) => (
         <Card
         className={`border ${data.border} flex flex-col justify-between`}
         key={data.id} 
         style={{ width: 375, margin: 20 }}
       >
         <img
           alt="example"
           src={data.imageUrl}
           className="w-44 h-auto mx-auto"
         />
         <div className="flex flex-col items-center text-center justify-between pb-3 flex-grow">
           <div>
             <h1 className="font-bold text-lg mb-4">{data.account_type}</h1>
             <p>{data.description}</p>
           </div>
           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-3">
            <button className="px-2 py-1 text-center mt-3 border bg-red-500 rounded text-white text-lg w-max">{data.btn1}</button>
            <button className="px-2 text-center mt-3 border bg-green-400 rounded text-white text-lg w-max">{data.btn2}</button>

           </div>
         </div>
       </Card>
       
        ))}
      </div>
    );
  };
  
  export default SelectAccount;