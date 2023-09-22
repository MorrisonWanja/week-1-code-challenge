//
function calaculateNetSary(salary,benefits){
    if(salary ===24000){
        let grossSalary = salary + benefits;
        let nhifContribution = 750;
        let nssfCntribution = 200;
        let taxableIncome = grossSalary-nhifContribution - nssfCntribution;
        let paye = taxableIncome*0.1;
        
        
        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Paye: Kshs${paye}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);

    }
    if (salary >= 24001 && salary <= 32333){

        let grossSalary = salary + benefits;
        let nhifContribution = 850;
        let nssfCntribution = 200;
        let taxableIncome = grossSalary-nhifContribution - nssfCntribution;
        let paye = taxableIncome*0.25;        
        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Paye: Kshs${paye}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);
    }

    if(salary >= 32334 && salary <= 500000){
        let grossSalary = salary + benefits;
        let nhifContribution = 0;
        let nssfCntribution = 200;
        let taxableIncome = grossSalary-nhifContribution - nssfCntribution;
        let paye = taxableIncome*0.3;
        
        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Paye: Kshs${paye}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);

    }
    // if(salary >= 500001 && salary <= 800000){

    // }
    // if(salary >800000){

    // }
      
        
    }
 calaculateNetSary(24000,8000)