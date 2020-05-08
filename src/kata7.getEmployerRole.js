const getEmployerRole = (employeeName, employees) => {
const x = employees.find(n => n.name === employeeName);

return x.role;
};

module.exports = getEmployerRole;
