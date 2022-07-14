window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});


//template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";   
    let innerHTML = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHTML = `${innerHTML}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete"  src="../assets/deletebutton.jpg">
                <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="../assets/Editbutton.jpg">
            </td>
        </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Likhita',
            _gender: 'Female',
            _department: [
                'Analyst',
                'Engineer'
            ],
            _salary: '650000',
            _startDate: '08 Jan 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/image5.jpg'
        },
        {
            _name: 'Aman',
            _gender: 'Male',
            _department: [
                'Lawyer'
            ],
            _salary: '700000',
            _startDate: '15 Jan 2015',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/image2.jpg'
        },
        {
            _name: 'Twinkle',
            _gender: 'Female',
            _department: [
                'Engineer',
            ],
            _salary: '780000',
            _startDate: '25 jan 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/image2.jpg'
        },
        {
            _name: 'Manav',
            _gender: 'Male',
            _department: [
                'Marketing',
                'Sales'
            ],
            _salary: '950000',
            _startDate: '02 Mar 2021',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/image3.jpg'
        }
    ];
    return employeePayrollListLocal;
}


const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>` 
    }
    return deptHtml;
}















