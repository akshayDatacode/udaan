import React, { Component } from 'react'

class DashboardAgent extends Component {
    render() {
        return (
            <div className="mt-5">
           <h1>Agent dashboard</h1>
            <button>
                Calculate EMI
            </button>
            <button>
               Apply for Loan
            </button>
            <button>
                Manage Applicants
            </button>
            <button>
               Logout
            </button>
           </div>
        )
    }

}
export default DashboardAgent