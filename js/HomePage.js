window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//template literal ES6 feature
const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th> 
        <th>Actions</th>
    </tr>
    <tr>
        <td><img class="profile" alt=""  src="..\assets\image5.jpg" alt=""></td>
        <td>Likhita</td>
        <td>Female</td>
        <td><div class="dept-label">Engineering</div></td>
        <td>450000</td>
        <td>14 May 2022</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="..\assets\delete button.jpg">
            <img id="1" onclick="update(this)" alt="edit" src="..\assets\write button.jpg">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;

}