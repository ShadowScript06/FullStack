import React from 'react'

function Problem5() {
    const arr=[{
        name:"Prajwal",
        age:25,
        city:"Khed"
    },
    {
        name:"Yogesh",
        age:28,
        city:"Akole"
    },
    {
        name:"Raj",
        age:28,
        city:"Barshi"
    }
]
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>{arr[0].name}</th>
                    <th>{arr[0].age}</th>
                    <th>{arr[0].city}</th>
                </tr>
                <tr>
                    <th>{arr[1].name}</th>
                    <th>{arr[1].age}</th>
                    <th>{arr[1].city}</th>
                </tr>
                <tr>
                    <th>{arr[2].name}</th>
                    <th>{arr[2].age}</th>
                    <th>{arr[2].city}</th>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Problem5