import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
// import { useDropzone } from 'react-dropzone'
import { APIError, PlantType } from '../types'

async function submitNewPlant(plantToCreate: PlantType) {
  const response = await fetch('/api/Plants/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(plantToCreate),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
async function loadOnePlant(id: string) {
  const response = await fetch(`/api/Plants/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
const NullPlant: PlantType = {
  id: undefined,
  name: '',
  type: '',
  location: '',
  watering: '',
  pot: 0,
  description: '',
  photoURL: '',
}

export function EditPlant() {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  const { data: plant = NullPlant } = useQuery<PlantType>(
    ['one-plant', id],
    () => loadOnePlant(id),
    {
      onSuccess: function () {
        console.log('Loaded the plant')
      },
    }
  )

  const [updatedPlant, setUpdatedPlant] = useState<PlantType>({
    id: undefined,
    name: '',
    type: '',
    location: '',
    watering: '',
    pot: 0,
    description: '',
    photoURL: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  // const [isUploading, setIsUploading] = useState(false)
  const createNewPlant = useMutation(submitNewPlant, {
    onSuccess: function () {
      history.push('/')
    },
    onError: function (apiError: APIError) {
      const newMessage = Object.values(apiError.errors).join('')

      setErrorMessage(newMessage)
    },
  })

  function handleNumberInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const NewUpdatedPlant = { ...updatedPlant, [fieldName]: value }

    setUpdatedPlant(NewUpdatedPlant)
  }

  function handleStringInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const newUpdatedPlant = { ...updatedPlant, [fieldName]: value }

    setUpdatedPlant(newUpdatedPlant)
  }

  // async function uploadFile(fileToUpload: File) {
  //   const formData = new FormData()

  //   formData.append('file', fileToUpload)

  //   const response = await fetch('/api/Uploads', {
  //     method: 'POST',
  //     body: formData,
  //   })

  //   if (response.ok) {
  //     return response.json()
  //   } else {
  //     throw 'Unable to upload image!'
  //   }
  // }

  // function onDropFile(acceptedFiles: File[]) {
  //   const fileToUpload = acceptedFiles[0]
  //   setIsUploading(true)
  //   uploadFileMutation.mutate(fileToUpload)
  // }
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop: onDropFile,
  // })

  // const uploadFileMutation = useMutation(uploadFile, {
  //   onSuccess: function (apiResponse: UploadResponse) {
  //     const url = apiResponse.url

  //     setNewPlant({ ...newPlant, photoURL: url })
  //   },

  //   onError: function (error: string) {
  //     setErrorMessage(error)
  //   },
  //   onSettled: function () {
  //     setIsUploading(false)
  //   },
  // })
  // let dropZoneMessage = 'Drag a picture of the restaurant here to upload!'

  // if (isUploading) {
  //   // dropZoneMessage = 'Uploading...'
  // }

  // if (isDragActive) {
  //   // dropZoneMessage = 'Drop the files here ...'
  // }

  return (
    <main className="PlantsPage">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          createNewPlant.mutate(updatedPlant)
        }}
        className="brown-and-green"
      >
        {errorMessage ? <p className="formError">{errorMessage}</p> : null}
        <p className="form-inputs">
          <input
            name="name"
            placeholder="Enter plant's name"
            value={updatedPlant.name}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-input">
          <input
            name="type"
            placeholder="Normal ,Herb, Fruit, Vegetable? "
            value={updatedPlant.type}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-inputs">
          <input
            name="location"
            placeholder="Indoor or Outdoor?"
            value={updatedPlant.location}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-input">
          <input
            name="watering"
            placeholder="How often does it need water?"
            value={updatedPlant.watering}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-inputs">
          <input
            name="pot"
            placeholder="Enter Pot number plant is in"
            value={updatedPlant.pot}
            onChange={handleNumberInputChange}
          />
        </p>
        <p className="form-input">
          <input
            name="description"
            placeholder="Describe the plant"
            value={updatedPlant.description}
            onChange={handleStringInputChange}
          />
        </p>
        {updatedPlant.photoURL ? (
          <p>
            <img alt=" Photo" width={200} src={updatedPlant.photoURL} />
          </p>
        ) : null}
        <p className="form-inputs">
          {/* <input type="file" onChange={onDropFile}/> */}
          {/* <div className="file-drop-zone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive
                ? 'Drop the files here ...'
                : 'Drag a picture of the restaurant here to upload!'}
            </div>
          </div> */}
        </p>
        <input type="submit" value="Submit" className="SubmitPlant" />
      </form>
    </main>
  )
}
