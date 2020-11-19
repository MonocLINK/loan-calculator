$(function() {

    // validate input rules and messages
    var loanRules = {
        salaryInput: {
            required: true,
            digits: true,
            min: 0,
            max: 1000000
        },
        creditScoreInput: {
            required: true,
            digits: true,
            min: 300,
            max: 850
        },
        monthsInput: {
            required: true,
            digits: true,
            min: 1,
            max: 480 // 40 years
        }
    }

    var loanMessage = {
        salaryInput: {
            required: "Must enter a salary.",
            digits: "Only integer values.",
            min: "You need to have an income.",
            max: "You make too much money."
        },
        creditScoreInput: {
            required: "Must enter a credit score.",
            digits: "Only integer values.",
            min: "Minimum of 300 credit score.",
            max: "Maximum of 850 credit score."
        },
        monthsInput: {
            required: "Must enter how long you've been working.",
            digits: "Only integer values.",
            min: "Enter valid timeframe",
            max: "Enter valid timeframe"
        }
    }

    // actually validate the input
    $("#loanForm").validate({
        rules: loanRules,
        messages: loanMessage,
        submitHandler: checkApproval
    });

    function checkApproval() {
        // input vars
        var salary = $("#salaryInput").val();
        var creditScore = $("#creditScoreInput").val();
        var months = $("#monthsInput").val();

        // constant vars, used to approve values
        var approvalSalary = 40000;
        var approvalCreditScore = 600;
        var approvalMonths = 12;
        var loanApproved = false; // by default, loan is not approved

        // determine if loan is approved or denied
        if (salary >= approvalSalary) {
            if (creditScore >= 600) {
                loanApproved = true;
            } else {
                if (months > approvalMonths) {
                    loanApproved = true;
                }
            }
        } else {
            if (creditScore >= 600) {
                if (months > approvalMonths) {
                    loanApproved = true;
                }
            }
        }

        // output values
        if (loanApproved) {
            $("#output").text("Loan Approved!");
        } else {
            $("#output").text("Loan Denied!");
        }
    }
});