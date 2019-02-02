import React from 'react'; //let to know JSX

const Card=({name ,id ,email})=>{       //{name,id,email}=props
	return(

		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}'`} />
			<div>
				<h2>{name}</h2>    
				<p>{email}</p>
			</div>
		</div>
		);
}

	//   <h2>{props.name}</h2>       it's JSX type . <h2>props.name</h2> is js type




export default Card;