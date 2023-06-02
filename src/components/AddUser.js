import React, { Component } from 'react'

export default class AddUser extends Component {
    state = {
        Users: [
            {
                id: 1,
                Name: 'Eldor',
                SureName: 'Kenjabayev',
                Age: 20,
                Email: 'eldorkenjabayev13@gmai.com'
            },
            {
                id: 2,
                Name: 'Baxtiyor',
                SureName: 'Zaripov',
                Age: 20,
                Email: 'baxtiyor03@gmai.com'
            },
            {
                id: 3,
                Name: 'Shoxrux',
                SureName: 'Uralov',
                Age: 22,
                Email: 'uralovshox12@gmai.com'
            },
            {
                id: 4,
                Name: 'Sergey',
                SureName: 'Haylov',
                Age: 21,
                Email: 'haylovSergey@gmai.com'
            },
            {
                id: 3,
                Name: 'Shoxrux',
                SureName: 'Uralov',
                Age: 22,
                Email: 'uralovshox12@gmai.com'
            },
            {
                id: 2,
                Name: 'Baxtiyor',
                SureName: 'Zaripov',
                Age: 20,
                Email: 'baxtiyor03@gmai.com'
            },

        ]
    }

btnAddUser = () =>{
let inputs = document.getElementById('inputsADDUSER');
let divAdd = document.getElementById('divAdd')
divAdd.style.zIndex='0'
inputs.style.display = 'flex'

}
btnSaveUser = () =>{
    let inputname = document.getElementById('name')
    let inputlastname = document.getElementById('surename')
    let inputage = document.getElementById('age')
    let inputemail = document.getElementById('email')
    let inputs = document.getElementById('inputsADDUSER');
    if(inputname.value === ''|| inputlastname.value === '' ||inputage.value === ''|| inputemail.value === '' ){
        alert('malumotlar bosh bolishi mumkin emas!!!')
    }else if(inputage.value <= 0){
        alert('Yosh 0 dan kichik bo`lishi mumkin emas!!!')

    } else{
        let nevuser = {
            Name: inputname.value,
            SureName: inputlastname.value,
            Age: inputage.value,
            Email: inputemail.value   
         }
         inputs.style.display = 'none'
         let user = this.state.Users
         user.push(nevuser)
         this.setState({
            Users:user
         })
         inputname.value=''
         inputlastname.value=''
         inputage.value ='' 
         inputemail.value =''
    }
    

}
btnDelete = (index) =>{
    let user = this.state.Users
    user.splice(index,1)
    this.setState({
        Users:user
    })
    
 }

    render() {
        return (
            <div  id='divAdd'>
                <button onClick={this.btnAddUser}>
                    Add User
                </button><br />
                <div className="inputsADDUSER " id='inputsADDUSER'
                style={{
                    width:'30%',
                    height:'25vh',
                    position:'relative',
                    display:'none',
                    justifyContent:'space-between',
                    padding:'3%',
                    left:'20%',
                    right:'20%',
                    border:'1px solid #000',
                    background:'bisque',
                }}>
                    <div>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name='name' id='name'required/><br /><br />
                    <label htmlFor="surename">LastName</label><br />
                    <input type="text" name='surename'id='surename'required />
                    </div>
                    <div>
                    <label htmlFor="age">Age</label><br />
                    <input type="number" name='number' id='age'required/><br /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email"name='email' id='email' required/>
                    </div>
                    <input type="submit" value="SaveUser" id="Adds" onClick={this.btnSaveUser}
                    style={{
                        width:'30%',
                        position:'absolute',
                        bottom:'10px',
                        left:'35%',
                        right:'35%',
                    }}
                    >
                        
                    </input>
                </div> <br />
                 <table border={'1'} style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Users.map((item, index) => (
                <tr key={index}>
                  <td>{index +1}</td>
                  <td>{item.Name}</td>
                  <td>{item.SureName}</td>
                  <td>{item.Age}</td>
                  <td>{item.Email}</td>
                  <td><button onClick={()=>this.btnDelete(index)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        )
    }
}
