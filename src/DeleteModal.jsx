import './DeleteModal.css'

function DeleteModal({isOpen, onClose, children}) {

    if(!isOpen) return null;

    return (
        <div className="modal-overlay">
            {children}
            <div className="delete-modal">
                <h2 className='delete-title'>Delete comment</h2>
                <p className='delete-content'>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
                <div className="delete-modal-buttons-container">
                    <button onClick={onClose} className="cancel-delete">No, Cancel</button>
                    <button className="yes-delete">Yes, Delete</button>
                </div>
            </div>
        </div>
        
    )
}

export default DeleteModal