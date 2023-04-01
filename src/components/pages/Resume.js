import React from "react";
import myResume from "../../utils/MyResume.pdf"

export default function Resume(){
return (
<div>
    <div>
        <h1>My Resume</h1>
        <p><a class="btn btn-danger" role="button" href={myResume}
   download="Olubukola_Abiona_Resume">
  Download
</a></p>
    </div>

</div>
)
};